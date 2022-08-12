import { TextField } from '@mui/material'

export default function CustomTextField({type="outlined", label, size="small", onInput, onChange, className}) {
	return (
		<TextField
			type={type}
			variant="outlined"
			label={label}
			className={"mx-8 bg-searchbg rounded-full "+className}
			size={size}
			sx={{
				'& fieldset': {
					borderRadius: '9999px',
					borderColor: 'rgb(60, 141, 236)!important',
					// backgroundColor: 'rgb(12, 14, 32)!important',
				},
				'& input': {
					color: 'white!important',
				},
				'& label': {
					color: 'white',
				},
			}}
			onInput={onInput}
      onChange={onChange}
		/>
	)
}
