import { FC } from "react";
import Container from "@components/Container";
import Section from "@components/Section";
import { useRouteError } from "react-router-dom";


const ErrorPage: FC = () =>{
    const error: any = useRouteError();
    console.log(error);

    return (
        <Section $flex>
            <Container>
                <h1>{error.status} | {error.statusText}</h1>
                <p>Oops! {error?.error?.message}</p>
            </Container>
        </Section>
    )
}

export default ErrorPage;