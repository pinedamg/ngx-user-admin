export const tpl: string= `
<div class="row">
    <div class="col-xs-12">
        <br />
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th (click)="sort('id')" class="sortable">
                        ID
                        <i class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                    <th (click)="sort('user_id')" class="sortable">
                        User ID
                        <i class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                    <th>
                        Event Log
                    </th>
                    <th>
                        Event Data
                    </th>
                    <th (click)="sort('created_at')" class="sortable">
                        Created At
                        <i class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                </tr>
            </thead>

            <tbody *ngIf="wait">
                <tr>
                    <td colspan="7" align="center">
                        <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>
                    </td>
                </tr>
            </tbody>

            <tbody *ngIf="!wait && events.length <= 0">
                <tr>
                    <td colspan="7" align="center">
                        <alert type="warning">Sorry, no user events were found.</alert>
                    </td>
                </tr>
            </tbody>

            <tbody *ngIf="!wait && events.length > 0">
                <tr class="users-events" *ngFor="let event of events">
                    <td> {{event.id}} </td>
                    <td> {{event.user_id}} </td>
                    <td> {{event.event}} </td>
                    <td> {{event.event_data|json}} </td>
                    <td> {{event.created_at}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="row paging" *ngIf="eventsTotal">
    <div class="col-xs-4">

        <nav aria-label="Page navigation">
          <ul class="pagination pagination-md">

            <li *ngIf="(currentPage > 1)">
              <a (click)="clickPrev()" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            <li
                *ngFor="let page of pages"
                 [ngClass]="{'active': (page == currentPage)}"
                >
                <a (click)="clickPage(page)">{{ page }}</a>
            </li>

            <li *ngIf="(currentPage < getPageCount())">
              <a (click)="clickNext()" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>

          </ul>
        </nav>

    </div>
</div>
`;
