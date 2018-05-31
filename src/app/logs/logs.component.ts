import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs$; // le $ dit que c'est une variable qui contient un observable (un flux de données qui arrive de manière asynchrone: le tableau de résultat se met à jour au fur et à mesure des changements)

  constructor(private logsService : LogsService, private router: Router) {}

  ngOnInit() {
    this.logs$ = this.logsService.getLogs()
  }

  showLogDetails(log){
    this.router.navigate(['/log', log.key])

  }
}
