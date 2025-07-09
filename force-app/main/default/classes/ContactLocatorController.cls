// ContactLocatorController.cls
public with sharing class ContactLocatorController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> searchContacts(String searchTerm) {
        String searchKey = '%' + searchTerm + '%';
        // Perform SOQL injection prevention by using bind variables
        return [
            SELECT Id, FirstName, LastName, Email, Phone, MailingStreet, MailingCity, MailingState, MailingPostalCode
            FROM Contact
            WHERE FirstName LIKE :searchKey OR LastName LIKE :searchKey
            WITH SECURITY_ENFORCED
        ];
    }
}