import java.util.*;
public class Employee{ 
    public String username;
    public int id;
    public int phoneNumber;
    // public int basicpay;
    // public int hra;
    public int totalSalary;
    Scanner scanner = new Scanner(System.in);
    public void getDetails(){
        System.out.print("Enter username: ");
        username = scanner.nextLine();
        System.out.print("Enter ID: ");
        id = scanner.nextInt();
        System.out.print("Enter phone number: ");
        phoneNumber = scanner.nextInt();
        System.out.print("Enter basic Pay: ");
        int basicpay = scanner.nextInt();
        System.out.print("Enter HRA: ");
        int hra = 3000;
        System.out.print("Enter DA: ");
        int da = 2500;
        totalSalary = calculateSalary(basicpay, hra, da);
        scanner.close();
    }
    public int calculateSalary(int basicPay, int hra, int da) {
     totalSalary= basicPay + hra + da;
     return totalSalary;
    }
    public void display(){
        System.out.println("\n User Details");
        System.out.println("Username: " + username);
        System.out.println("ID: " + id);
        System.out.println("Phone Number: " + phoneNumber);
        System.out.println("Total Salary: " + totalSalary);
    
    }
    public static void main(String[] args) {
        Employee employee = new Employee();
        employee.getDetails();
        employee.display();
    }
}

