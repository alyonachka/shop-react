import './style.css'

export const Page = ({page, currentPage, setCurrentPage}) => {
    return (
        <div
            className={page === currentPage ? "page active" : "page"}
            onClick={() => {
                if (currentPage === page) {
                    return;
                }
                setCurrentPage(page);
            }}
        >
            {page}
            <div className="underline" />
        </div>
    );
};
