import { Component, OnInit , ViewChild } from '@angular/core';
declare var Peer: any;

@Component({
  selector: 'app-conference-room',
  templateUrl: './conference-room.component.html',
  styleUrls: ['./conference-room.component.css']
})
export class ConferenceRoomComponent implements OnInit {

  @ViewChild('localvideo') localVideo: any;
  @ViewChild('remotevideo') remoteVideo: any;

  peer:any;
  anotherid:any;
  mypeerid:any;

  constructor() { }

  ngOnInit() {
    let video = this.remoteVideo.nativeElement;
    let localvideo = this.localVideo.nativeElement;
   // this.peer = new Peer({host: 'localhost', port: 9000, path: '/myapp'});
    this.peer = new Peer({　host:'peerjs-server.herokuapp.com', secure:true, port:443, key: 'peerjs', debug: 3})
   // this.peer = new Peer({　host:'peerservertesting.herokuapp.com', secure:true, port:443, key: 'peerjs', debug: 3})
    
    
    setTimeout(() => {
      debugger;
      this.mypeerid = this.peer.id;
    },3000);
    
    this.peer.on('connection', function(conn) {
  conn.on('data', function(data){
    console.log(data);
  });
});
 
 var n = <any>navigator;    
    n.getUserMedia =  ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );    
    n.getUserMedia({video: true, audio: false}, function(stream) {      
      localvideo.src = URL.createObjectURL(stream);
      localvideo.play();
    }, function(err) {
      console.log('Failed to get stream', err);
    })

    this.peer.on('call', function(call) {
      
      n.getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream);      

        call.on('stream', function(remotestream){
          video.src = URL.createObjectURL(remotestream);
          video.play();
        })
      }, function(err) {
        console.log('Failed to get stream', err);
      })
    })
  }

connect(){
    var conn = this.peer.connect(this.anotherid);
conn.on('open', function(){
  conn.send('Message from that id');
});
  }

  videodisconnect(){
    let video = this.remoteVideo.nativeElement;
    video.src = null;
    
  }
  
  videoconnect(){
    let video = this.remoteVideo.nativeElement;
    var localvar = this.peer;
    var fname = this.anotherid;
    
    var n = <any>navigator;
    
    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
    
    n.getUserMedia({video: true, audio: true}, function(stream) {
      var call = localvar.call(fname, stream);
      call.on('stream', function(remotestream) {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      })
    }, function(err){
      console.log('Failed to get stream', err);
    })
  }

}
