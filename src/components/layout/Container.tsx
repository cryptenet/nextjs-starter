import { FC, ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
    <section className="container flex flex-col flex-1 justify-center items-center w-screen">
        {children}
    </section>
);

export default Container;
