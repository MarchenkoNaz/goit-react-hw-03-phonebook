import React from 'react';

import PropTypes from 'prop-types';


const Filter = ({ filter, onChange }) => {
	return (<>
		<div className="mb-3 container-sm mt-3">
			<label htmlFor="exampleInputEmail1" className="form-label">Search contact</label>
			<input className="form-control" type="text" value={filter} onChange={onChange} />
		</div>	</>
	);
}

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Filter;