import './ProjectList.css';

function ProjectList({ projects }) {
	let index = 0;

	return (
		projects.map((item) => (
			<div className='gallery__img' key={index++}>
				<img src={item.img} alt='' />
			</div>
		))
	);
}

export default ProjectList