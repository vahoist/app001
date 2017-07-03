import { Directive, ElementRef, Renderer2, Input } from '@angular/core'

@Directive({
    selector: '[bold]',
    host: {
        '(mouseenter)':'aa()',
        '(mouseleave)':'bb()'
    }
})

export class boldDirective {
    @Input('bold') elt: ElementRef

    aa() {
        this.setFontWeight("bold");
    }

    bb() {
        this.setFontWeight("normal");
    }
    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2) {
        this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer')
    }

    private setFontWeight(val: string) {
        this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', val);
    }


}