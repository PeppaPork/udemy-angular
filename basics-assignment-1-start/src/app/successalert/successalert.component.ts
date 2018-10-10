import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-successalert',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Success!</p>
            </div>
        </div>
    </div>
    `,
    styles: [`
        p {
            color: white;
            background-color: green;
            text-align: center;
        }
    `]
})
export class SuccessalertComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
