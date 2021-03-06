export const tpl: string= `
<div class="row">
    <div class="col-xs-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                Login
            </div>
            <div class="panel-body">
                <form 
                        id="user-edit" 
                        class="form-horizontal"
                        novalidate 
                        (ngSubmit)="onSubmit(loginForm)" 
                        [formGroup]="loginForm"
                    >
                    <div class="form-group" id="email-form">
                        <label for="email" class="col-xs-2 control-label">Email</label>
                        <div class="col-xs-10">
                            <input type="text" class="form-control" name="email" 
                                formControlName="email" placeholder="Email">

                            <div class="text-danger" *ngIf="loginForm.get('email').hasError('required') && loginForm.get('email').touched">
                              A valid email is required.
                            </div>
                        </div>
                    </div>

                    <div class="form-group" id="password-form">
                        <label for="password" class="col-xs-2 control-label">Password</label>
                        <div class="col-xs-10">
                            <input type="password" class="form-control" name="password" 
                                    formControlName="password" placeholder="Password">
                            <div class="text-danger" *ngIf="loginForm.get('password').hasError('required') && loginForm.get('password').touched">
                              Password is required.
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-offset-2 col-xs-4">
                            <button type="submit" class="btn btn-success" [disabled]="loginForm.invalid || wait">
                                Login
                                <i *ngIf="wait" class="fa fa-refresh fa-spin fa-fw"></i> 
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
`;
