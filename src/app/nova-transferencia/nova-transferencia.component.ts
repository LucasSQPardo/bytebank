import { Transferencia } from './../models/transferencia.model';
import { Component, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { TransferenciaService } from '../service/transferencia.service';
import { Router } from '@angular/router';
import { MatExpansionPanel } from '@angular/material/expansion/expansion-panel';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() onTransfer: EventEmitter<any> = new EventEmitter();
  panelOpenState?: boolean;
  valor?: number;
  destino?: number;
  open: boolean = false;
  expandHandler = true;
  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log("Transferencia");
    const valorEmitido: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitido).subscribe(
      resultado => {
        console.log(resultado);
        this.limparCampos
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  limparCampos() {
    this.valor = undefined;
    this.destino = undefined;
  }
  handler() {

  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
  teste(event?:any){
    mep.expanded = true;
  }
}
