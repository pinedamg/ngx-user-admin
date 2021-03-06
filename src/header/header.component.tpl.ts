export const tpl: string= `
<nav class="navbar navbar-default navbar-fixed-top"> 
    <div class="container"> 
        <div class="navbar-header"> 
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"> 
                <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> 
            </button> 
            <a href="#" class="navbar-brand">User Admin</a> 
        </div> 
        <div class="collapse navbar-collapse" id="navbar"> 
            <ul class="nav navbar-nav" *ngIf="isLoggedIn()">
                <li>
                    <a routerLink="/list" routerLinkActive="active">List Users</a>
                </li>
                <li>
                    <a routerLink="/events" routerLinkActive="active">User Event Log</a>
                </li>  
                <li>
                    <a (click)="clickLogout()">Logout</a>
                </li> 
            </ul> 
        </div> 
    </div> 
</nav>
<div id="header-push"></div>
`;
