import React, { useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";
import './Portfolio.css';

function Portfolio({ projectList }) {
	const filtersList = ['All', 'Websites', 'Flayers', 'Business Cards'];

	const [filteredListProjects, setFilteredListProjects] = useState(projectList);
	const [selected, setSelected] = useState('All');

	const filter = (e) => {
		const buttons = document.querySelectorAll('button');
		buttons.forEach((item) => item.classList.remove('active'));

		e.target.classList.add('active');

		const select = e.target.textContent;

		if (select === 'All') {
			setFilteredListProjects(projectList);
		} else {
			setFilteredListProjects(
				projectList.filter(item => item.category === select)
			);
		}

		setSelected(select);
	}

	return (
		<div className='container'>
			<Toolbar
				filters={filtersList}
				selected={selected}
				onSelectFilter={filter}
			/>

			<div className='gallery'>
				<ProjectList projects={filteredListProjects} />
			</div>
		</div>
	);
}

export default Portfolio;