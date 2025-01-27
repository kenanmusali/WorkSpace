import iconRefresh from '../../../assets/icons/refresh.svg';

const Refresh = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div>
            <div className="ItemSectionGroup">
                <div className="ItemSection" onClick={handleRefresh}>
                    <p className='p'>Refresh</p>
                    <img src={iconRefresh} draggable="false" alt="refresh-icon" />
                </div>
            </div>
        </div>
    );
};

export default Refresh;
