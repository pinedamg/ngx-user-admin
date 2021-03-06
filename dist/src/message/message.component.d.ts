import { OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
/**
 * Message Component
 *
 * Displays flash messages from service
 */
export declare class MessageComponent implements OnDestroy {
    private messages;
    private subscription;
    /**
     * local instance of message service
     */
    private messageService;
    /**
     *
     */
    constructor(messageService: MessageService);
    /**
     * stop subscription to prevent memory leaks
     */
    ngOnDestroy(): void;
}
