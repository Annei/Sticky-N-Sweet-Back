<template>
	<vue-scroll class="page-calendar">
		<div id="cal" class="calendar-wrap card-base card-shadow--medium"></div>
		
		<el-dialog title="Agregar evento" :visible.sync="dialogFormVisible">
			<el-form :model="form" ref="form" label-position="top">
				<el-col :span="13">
					<el-form-item label="Titulo" prop="title" :rules="[ { required: true, message: 'Por favor, ingrese el titulo del evento', trigger: 'blur' } ]">
						<el-input v-model.trim="form.title"></el-input>
					</el-form-item>
				</el-col>
				<el-col class="text-center" :span="1">&nbsp;</el-col>
				<el-col :span="5">
					<el-form-item label="Todo el día">
						<el-switch v-model="form.allDay"></el-switch>
					</el-form-item>
				</el-col>
				<el-col :span="5">
					<el-form-item label="Color">
						<el-color-picker v-model="form.color" :predefine="predefineColors"></el-color-picker>
					</el-form-item>
				</el-col>
				<el-form-item label="Descripción">
					<el-input type="textarea" autosize v-model="form.description"></el-input>
				</el-form-item>
				<el-form-item label="Inicio" prop="startDate" :rules="[ { required: true, message: 'Por favor ingrese un fecha valida', trigger: 'blur' } ]">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="Escoja un día" v-model="form.startDate" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col v-if="!form.allDay" class="text-center" :span="2">-</el-col>
					<el-col v-if="!form.allDay" :span="11">
						<el-time-picker type="fixed-time" placeholder="Escoja un día" v-model="form.startTime" style="width: 100%;" format="HH:mm"></el-time-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="Finalización">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="Escoja un día" v-model="form.endDate" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col v-if="!form.allDay" class="text-center" :span="2">-</el-col>
					<el-col v-if="!form.allDay" :span="11">
						<el-time-picker type="fixed-time" placeholder="Elija una hora" v-model="form.endTime" style="width: 100%;" format="HH:mm"></el-time-picker>
					</el-col>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="closeEventDialog">Cancelar</el-button>
				<el-button type="primary" @click="setEvent">Guardar</el-button>
			</span>
		</el-dialog>
	</vue-scroll>

</template>

<script>
import moment from 'moment-timezone'
import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'

export default {
	name: 'Calendar',
	data() {
		const __Y = moment().format('YYYY')
		const __M = moment().format('MM')

		return {
			cal: null,
			dialogFormVisible: false,
			form: {
				title: '',
				description: '',
				allDay: false,
				startDate: '',
				startTime: '',
				endDate: '',
				endTime: '',
				color: '#4a596a'
			},
			predefineColors: [
				'#ff4500',
				'#ff8c00',
				'#ffd700',
				'#90ee90',
				'#00ced1',
				'#1e90ff',
				'#4a596a',
				'#c71585'
			],
			options: {
				customButtons: {
					addEvent: {
						text: '✚',
						click: this.addEventDialog
					}
				},
				lang: 'es',
				header: {
					left:   'anterior,siguiente,hoy',
					center: 'title',
					right:  'month,agendaWeek,agendaDay,listWeek addEvent'
				},
				height: "auto",
				firstDay: 1,
				allDaySlot: true,
				slotEventOverlap: true,
				selectable: true,
				selectHelper: true,
				timeFormat: 'HH:mm',
				navLinks: true, // can click day/week names to navigate views
				editable: true,
				eventLimit: true, // allow "more" link when too many events
				events: [
					{ title: 'TODO EL DÍA', start: __Y+'-'+__M+'-01' },
					{ title: 'Evento largo', start: __Y+'-'+__M+'-07', end: __Y+'-'+__M+'-10' },
					{ id: 999, title: 'Evento equis', start: __Y+'-'+__M+'-09T16:00:00' },
					{ id: 999, title: 'Evento equis X2', start: __Y+'-'+__M+'-16T16:00:00' },
					{ title: 'Conferencia', start: __Y+'-'+__M+'-11', end: __Y+'-'+__M+'-13' },
					{ title: 'Reunion', start: __Y+'-'+__M+'-12T10:30:00', end: __Y+'-'+__M+'-12T12:30:00' },
					{ title: 'Almuerzo', start: __Y+'-'+__M+'-12T12:00:00' },
					{ title: 'Reunión', start: __Y+'-'+__M+'-12T14:30:00' },
					{ title: 'Happy Hour', start: __Y+'-'+__M+'-12T17:30:00' },
					{ title: 'Cena', start: __Y+'-'+__M+'-12T20:00:00' },
					{ title: '¡Cumpleaños!', start: __Y+'-'+__M+'-13T07:00:00' },
					{ title: 'Click aqui para Google!', url: 'http://google.com/', start: __Y+'-'+__M+'-28' }
				],
				dayClick: this.dayClick,
				eventClick: this.eventClick,
				select: this.select
			}
		}
	},
	methods: {
		closeEventDialog() {
			this.$refs.form.resetFields()
			this.dialogFormVisible = false
			this.form = {
				title: '',
				description: '',
				allDay: false,
				startDate: '',
				startTime: '',
				endDate: '',
				endTime: '',
				color: '#4a596a'
			}
		},
		setEvent() {
			this.$refs.form.validate((valid) => {
				if (valid) {

					let start = moment(this.form.startDate)
					if(this.form.startTime) {
						start.add(moment(this.form.startTime).format('HH'), 'horas')
						start.add(moment(this.form.startTime).format('mm'), 'minutos')
					}


					let event = {
						id: new Date().getTime(), 
						title: this.form.title, 
						description: this.form.description, 
						start:  start,
						allDay: this.form.allDay
					}

					if(this.form.color) event.color = this.form.color
					if(this.form.endDate) {
						let end = moment(this.form.endDate)
						if(this.form.endTime) {
							end.add(moment(this.form.endTime).format('HH'), 'horas')
							end.add(moment(this.form.endTime).format('mm'), 'minutos')
						} else {
							end.add(24, 'horas')
						} 

						event.end = end
					}

					this.cal.fullCalendar('renderEvent', event, true);

					this.closeEventDialog()
				} else {
					return false;
				}
			});
		},
		addEventDialog() {
			this.dialogFormVisible = true
		},
		dayClick(date, event, view) {
			this.form.startDate = date
			this.dialogFormVisible = true
		},
		eventClick(calEvent, jsEvent, view) {
			this.form = {
				title: calEvent.title,
				description: calEvent.description,
				allDay: calEvent.allDay,
				startDate: calEvent.start,
				startTime: calEvent.start,
				endDate: calEvent.end,
				endTime: calEvent.end,
				color: calEvent.color || '#4a596a'
			}
			this.dialogFormVisible = true
		},
		select(start, end) {
			this.form.startDate = start
			this.form.endDate = end
			this.dialogFormVisible = true
		},
	},
	mounted() {
		this.cal = $(window.document.getElementById('cal'))
		this.cal.fullCalendar(this.options)
	}
}
</script>

<style lang="scss">
@import '../../assets/scss/_variables';

/*.page-calendar {
	.calendar-wrap {
		//background: white;
	}
}*/
</style>

