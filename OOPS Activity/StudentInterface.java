interface Students {
    void display();
}

class Details implements Students {
    String name;
    int id;
    String department;

    // Constructor
    public Details(String name, int id, String department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }

    @Override
    public void display() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Department: " + department);
    }
}

public class StudentInterface {
    public static void main(String[] args) {
        Details details1 = new Details("Ram", 101, "CSE");
        Details details2 = new Details("Rajesh", 102, "MECH");

        details1.display();
        details2.display();
    }
}
