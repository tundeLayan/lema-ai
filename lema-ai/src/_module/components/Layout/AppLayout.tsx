import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <main className="md:[52.17%] lg:w-[59.44%] mx-auto pt-[130px] font-inter px-5 sm:px-2 md:px-3 lg:px-0">
            <Outlet />
        </main>
    );
};

export default AppLayout;
