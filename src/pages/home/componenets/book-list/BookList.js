// @flow
import * as React from "react";
import { BookListWrap, CardSkeleton } from "./book-list.s";
import { Grid } from "@mui/material";
import { BookItem } from "./BookItem";
import { useSelector } from "react-redux";
import { serchSelect } from "../../../../store/selectors";
import ReactSkeleton from "react-loading-skeleton"
import {
  useGetBooksQuery,
  useGetBooksSearchQuery,
} from "../../../../store/services/bookApi";
import { useAuth } from "../../../../hooks";

export const BookList = (props) => {
  const serchText = useSelector(serchSelect);
  const { user } = useAuth();

  const { data: books, isLoading: booksLoad } = useGetBooksQuery(user);
  const { data: booksSeach, isLoading: searchLoad } =
    useGetBooksSearchQuery({ serchText, user }, { skip: !serchText });

    console.log(books);
    

  return (
    <BookListWrap>
      <Grid container spacing={4}>
        {(booksLoad || searchLoad) ? (
          [1,2,3,4,5,6].map(item => (
            <Grid item md={4} key={item}>
              <CardSkeleton>
                <ReactSkeleton />
                <ReactSkeleton circle width={"20px"} />
                <ReactSkeleton width={"80px"} />
                <ReactSkeleton />
              </CardSkeleton>
            </Grid>
          ))
        ) : (
          (serchText ? booksSeach : books)?.map((item) => (
            <Grid item md={4} key={item.id}>
              <BookItem {...item} />
            </Grid>
          ))
        )}
      </Grid>
    </BookListWrap>
  );
};
