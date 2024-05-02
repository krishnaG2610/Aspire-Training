class Students {
    String name;
    int id;

    // Constructor
    public Students(String name, int id) {
        this.name = name;
        this.id = id;
    }

    // Copy Constructor
    public Students(Students student) {
        this.name = student.name;
        this.id = student.id;
    }

    void display() {
        System.out.println("name: " + name);
        System.out.println("id: " + id);
    }
}

public class CopyConstructor {
    public static void main(String[] args) {
        Students student1 = new Students("ram", 101);
        Students student2 = new Students(student1); // Using Copy Constructor

        student1.display();
        student2.display();
    }
    
}
