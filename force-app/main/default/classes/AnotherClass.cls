public  class AnotherClass {
    @AuraEnabled(Cacheable =true)
    public  static List<Account> anotherMethod() {
 List<Account>accounts=[select id,Name,AnnualRevenue from Account];
return accounts;
    }
}
