import { Injectable, ComponentFactoryResolver, ApplicationRef, ComponentRef, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalComponentRef!: ComponentRef<any>;
  private isModalOpen: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef
  ) { }

  openModal(componentType: Type<any>, title: string, content: any): void {
    if (this.isModalOpen) return; // Evitar abrir múltiples modales simultáneamente

    // Crear un componente modal dinámico
    const factory = this.resolver.resolveComponentFactory(componentType);
    this.modalComponentRef = factory.create(this.applicationRef.injector);

    // Establecer las propiedades del modal
    this.modalComponentRef.instance.title = title;
    this.modalComponentRef.instance.content = content;

    // Adjuntar el componente al DOM
    this.applicationRef.attachView(this.modalComponentRef.hostView);
    const domElem = (this.modalComponentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Mostrar el modal
    document.body.style.overflow = 'hidden'; // Bloquear el scroll del cuerpo
    this.isModalOpen = true;

    // Suscribirse al evento de cierre del modal
    this.modalComponentRef.instance.close.subscribe(() => {
      this.closeModal();
    });
  }

  closeModal(): void {
    if (this.modalComponentRef) {
      this.applicationRef.detachView(this.modalComponentRef.hostView);
      this.modalComponentRef.destroy();
      document.body.style.overflow = ''; // Restaurar el scroll del cuerpo
      this.isModalOpen = false;
    }
  }
}
