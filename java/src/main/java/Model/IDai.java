package Model;

import java.util.ArrayList;

public interface IDai<E,I> {
    public int add(E e);
    public int delete(Integer e);
    public int update(E e);
    // public ArrayList<E> findAll(E e);
}
