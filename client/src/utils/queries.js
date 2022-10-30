import { gql } from '@apollo/client';

export const QUERY_BOOK = gql`
{
    book {
        _id
        city
        subject
        
    }
}`;