import { Component, OnInit } from '@angular/core';
import { RandomDadJokeService} from '../../random-dad-joke.service';

@Component({
  selector: 'app-random-dad-joke',
  templateUrl: './random-dad-joke.component.html',
  styleUrls: ['./random-dad-joke.component.scss']
})
export class RandomDadJokeComponent implements OnInit {
  dadJoke: any;
  constructor(private service: RandomDadJokeService) { }

  ngOnInit() {
    this.service.getDadJoke().subscribe(res => this.dadJoke = res);
  }

}
