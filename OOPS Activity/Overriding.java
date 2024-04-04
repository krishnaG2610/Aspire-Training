class StudentsOverriding {
    String name;
    int id;
    public StudentsOverriding(String name, int id){
        this.name=name;
        this.id=id;
    }
    public void display(){
        System.out.println(name);
        System.out.println(id);
    }
}
class batch extends StudentsOverriding{
    String batch;
    public batch(String name, int id,String batch){
        super(name,id);
        this.batch=batch;
    }
    public void display(){
        super.display();
        System.out.println(batch);
    }
}
public class Overriding{
    public static void main(String[] args){
        batch student = new batch("ram", 101, "Morning");
        student.display();
    }
}