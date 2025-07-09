// contactLocator.js
import { LightningElement, wire } from 'lwc';
import searchContacts from '@salesforce/apex/ContactLocatorController.searchContacts';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Address', fieldName: 'FullAddress', type: 'text' } // Custom field to display full address
];

export default class ContactLocator extends LightningElement {
    searchTerm = '';
    contacts;
    error;
    columns = COLUMNS;

    // Wire the Apex method to reactively get data
    @wire(searchContacts, { searchTerm: '$searchTerm' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data.map(contact => ({
                ...contact,
                // Combine address fields for display
                FullAddress: [contact.MailingStreet, contact.MailingCity, contact.MailingState, contact.MailingPostalCode]
                                .filter(Boolean) // Remove null/undefined parts
                                .join(', ')
            }));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
            console.error('Error retrieving contacts:', error);
        }
    }

    get hasContacts() {
        return this.contacts && this.contacts.length > 0;
    }

    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
    }
}