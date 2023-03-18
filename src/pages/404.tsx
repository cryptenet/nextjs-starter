import { Container, EmptyLayout } from '@components/index';

const E404 = () => (
    <EmptyLayout pageTitle="404">
        <Container>
            <h1 className="text-6xl text-taupe-gray">404</h1>
            <h2 className="text-4xl text-chinese-silver mt-4">Page not found</h2>
        </Container>
    </EmptyLayout>
);

export default E404;
