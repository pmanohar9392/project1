public with sharing class AccountHelper {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        List<Account> v = [SELECT Id, Name, Type, Rating,Phone, Website, AnnualRevenue FROM Account];
        
                return acc;
    }
    }