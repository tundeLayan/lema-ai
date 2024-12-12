import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <main className="md:[52.17%] lg:w-[59.44%] mx-auto pt-[130px] font-inter px-5 md:px-2 lg:px-0">
            <Outlet />
        </main>
    );
};

export default AppLayout;
