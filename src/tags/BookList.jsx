import { useEffect, useState } from "react";
import axios from "axios";

let BookList = () => {
  const [list, setList] = useState([]);

  // 도서목록을 가져오는 함수
  const fetchBooks = async () => {
    // 로컬 테스트 : http://localhost:8080/api/books
    const res = await axios.get("http://18.206.89.55:8080/api/books");
    setList(res.data);
  };

  // 컴포넌트가 처음 만들어 질때 (마운트 될 때) 도서목록 가져오기
  // []); -> 최초 동작시 빈배열 -> 최초 동작만 하기
  useEffect(() => {
    fetchBooks;
  }, []);

  let tr_list = list.map((book) => {
    return (
      <>
        <tr key={book.no}>
          <td>{book.no}</td>
          <td>{book.title}</td>
          <td>{book.price}</td>
          <td>{book.qty}</td>
          <td>{book.publisher}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h2>도서목록</h2>
      <table>
        <thead>
          <tr>
            <th>도서번호</th>
            <th>도서명</th>
            <th>가격</th>
            <th>수량</th>
            <th>출판사</th>
          </tr>
        </thead>
        <tbody>{tr_list}</tbody>
      </table>
    </>
  );
};
export default BookList;
