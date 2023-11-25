public with sharing class ContactData {
    @AuraEnabled 
    public static list<contact> getConData(String accountRecordId, String searchValue) {
         if(searchValue != '' && searchValue != null){
            String key = '%'+ searchValue +'%';

            List<Contact> fetch = [SELECT id, Name, Phone, AccountId FROM Contact WHERE AccountId =: accountRecordId AND Name LIKE : key];

            if(!fetch.isEmpty()){
                return fetch;
            }
            return null;
         }
          else {
            List<Contact> fetch = [SELECT id, Name, Phone, AccountId FROM Contact WHERE AccountId =: accountRecordId];
            return fetch;

          }
    }
}