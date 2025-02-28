const CreativeWork = ({ icon, title, description, className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <img src={icon} alt={title} className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
    );
};

export default CreativeWork;