import {test, Locator, expect} from '@playwright/test';
import { loginDentalLink } from '../pages/login-page';
import { darCita } from '../pages/dar-cita';

test ('test-login', async ({page}) => {

    const login = new loginDentalLink(page);
    const crearCita = new darCita(page);
    await login.GoTo();

    await login.loginUser('admin','clave2022');

    //dar cita

    await crearCita.DarCita();
    await crearCita.selectDoctor('Dr(a). App, Test');
    await crearCita.selectDuracion('3');
    await crearCita.selectHorario();
    await crearCita.selectPaciente('37160381 Alvaro Arana');
    await crearCita.confirmacionCita();

});


