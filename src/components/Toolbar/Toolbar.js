import './Toolbar.css';

function Toolbar({ filters, selected, onSelectFilter }) {
	let index = 0;

	return (
		<div className='toolbar'>
			{filters.map((item) => (
				<button
					onClick={onSelectFilter}
					key={index++}
					className={item === selected ? 'active' : ''}
				>
					{item}
				</button>
			))}
		</div>
	);
}

export default Toolbar;