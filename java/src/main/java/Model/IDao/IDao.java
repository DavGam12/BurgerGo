package Model.IDao;

import java.util.ArrayList;

public interface IDao<E,I> {
    int add(E e);
    int delete(I e);
    int update(E e);
    ArrayList<E> findAll(E e);
}
