public class StudentsOverloading {
    public void display(String name, int id ){
        System.out.println("name: " + name);
        System.out.println("id: " + id);
 
   }
   public void display(String name, int id, String department){
    System.out.println("name: " + name);
    System.out.println("id: " + id);
    System.out.println("department: " + department);
   } 
   public static void main(String[] args) {
    StudentsOverloading student = new StudentsOverloading();
    student.display("Ram", 101);
    student.display("rajesh", 102, "MECH");
}
}

