
const NavItems = ({items}) => (
    <ul>
        {items && items.map(({name,title}) =>
            <li key={name}>{title}</li>
        )}
    </ul>
);

export default NavItems;