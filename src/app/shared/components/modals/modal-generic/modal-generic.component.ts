import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
    .modal {
      border-radius: 24px;
      position: fixed;
      top: 50%;
      left: 50%;
      width: 500px;
      transform: translate(-50%, -50%);
      background-color: white;
      z-index: 1001;
      padding: 20px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    }
    .modal-content {
      width: 100%;
      height: 100%;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      span {
        font-weight: bold;
        font-size: 24px;
      }
      i {
        cursor: pointer;
      }
    }
    .modal-footer {
      button {
        cursor: pointer;
        width: 100%;
        height: 32px;
        color: white;
        font-weight: bold;
        background-color: black;
      }
    }
    .modal-body {
      padding-bottom: 8px;
      input {
        width: -webkit-fill-available;
        height: 32px;
      }
    }
  `]
})
export class ModalGenericComponent {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @Output() nameSubmitted = new EventEmitter<string>();

  name: string = '';

  submitName(): void {
    //Hacer petición 
    this.nameSubmitted.emit(this.name);
    this.close.emit();
  }
}