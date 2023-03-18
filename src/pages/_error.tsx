import { Container, EmptyLayout } from '@components/index';

const Error = () => (
    <EmptyLayout pageTitle="Error!!">
        <Container>
            <h1 className="text-6xl text-taupe-gray">Ops!!</h1>
            <h2 className="text-4xl text-chinese-silver mt-4">Something went wrong!</h2>
        </Container>
    </EmptyLayout>
);

export default Error;
