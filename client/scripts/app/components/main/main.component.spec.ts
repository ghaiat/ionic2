import { TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('Module: app', () => {
    describe('Component: MainComponent', () => {

        beforeEach(() => {  
            TestBed.configureTestingModule({
                declarations: [MainComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(MainComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});