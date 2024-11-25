import { Component, Input, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';
import { empty } from 'rxjs';
import { Music } from 'src/app/recursiflab/models/music';

@Component({
  selector: 'player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent {
  @ViewChild('player') player!: Player;
  @ViewChild('audio') audio: any;
  value = 0;
  selectedId = 0;
  @Input() playerList: Music[] = [];;



  updateSrcMusic = () => {
    this.player.pause();
    const audioElement = <HTMLSourceElement>this.audio.nativeElement;
    const vmFile = audioElement.parentElement as HTMLAudioElement;
    vmFile.src = this.playerList[this.selectedId].music;
    this.player.play();
  };

  onNext = () => {
    if (this.selectedId == this.playerList.length - 1) this.selectedId = 0;
    else this.selectedId++;
    this.updateSrcMusic();
  };
  onPrevious = () => {
    if (this.selectedId == 0) this.selectedId = this.playerList.length - 1;
    else this.selectedId--;
    this.updateSrcMusic();
  };

  onStartPause = (num = this.selectedId) => {
    if (num != this.selectedId) {
      this.selectedId = num;
      this.updateSrcMusic();
    } else if (this.player.playing) this.player.pause();
    else this.player.play();
  };

  getCurrentTime = (num: number) => {
    if (this.player) {
      if (num === this.selectedId) {
        return this.player.currentTime;

      } else return 0;
    } else return 0;
  };


  checkPlayer = () => {
    if (this.player) {
      return this.player.playing;
    } else return false;
  };

  checkCurrent = (num: number) => {
    return num === this.selectedId
      ? 'p-3 group focus:outline-none bg-blue-500'
      : 'p-3 hover:bg-blue-500 group focus:outline-none';
  };
}
