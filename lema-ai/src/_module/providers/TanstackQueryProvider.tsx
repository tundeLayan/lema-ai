import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type TTanstackProps = {
    children: React.ReactNode;
};
const queryClient = new QueryClient();

const TanstackQueryProvider = (props: TTanstackProps) => {
    const { children } = props;
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default TanstackQueryProvider;
