import {expect, Locator, Page} from '@playwright/test';

export class darCita{
    readonly page: Page;
    readonly darCitaButton: Locator;
    readonly especialidadSelect: Locator;
    readonly doctorSelect: Locator;
    readonly recursoSelect: Locator;
    readonly duracionSelect: Locator;
    readonly multiCitaSelect: Locator;
    readonly diaSelect: Locator;
    readonly continuarButton: Locator;
    readonly cerrarButton: Locator;

    constructor(page: Page){

        this.page = page;
        this.darCitaButton = page.getByRole('button', { name: 'Dar cita' });
        this.especialidadSelect = page.locator('#especialidades metrics-trigger');
        //this.especialidadSelect = page.getByRole('combobox');
        this.doctorSelect = page.getByRole('combobox', { name: 'Seleccionar doctor' }).locator('b');
        this.recursoSelect = page.locator('#recurso metrics-trigger');
        this.duracionSelect = page.locator('#duracion metrics-trigger');
        this.multiCitaSelect = page.locator('#set-citas-multiple');
        this.diaSelect = page.locator('#class="horas-content');
        this.continuarButton = page.locator('#.btn.btn-success.pull-right.continuar-modal.metrics-trigger');
        this.cerrarButton = page.locator('#.btn.pull-right.cancelar-modal.metrics-trigger');
    }

    async DarCita(){
        await this.darCitaButton.click();
        await this.doctorSelect.click();




    }

    async selectDoctor(nameDoctor:string){
        await this.page.getByRole('combobox', { name: 'Seleccionar doctor' }).locator('b').dblclick();
        await this.page.getByRole('treeitem', { name: nameDoctor }).click();
        await this.page.locator('#motivos-atencion-cita-modal').getByText('Omitir').click();

    }

    async selectDuracion(duracion:string){
        await this.page.getByRole('combobox').nth(4).selectOption(duracion)
    }

    async selectHorario(){
        await this.page.locator('.horario-extraordinario > .metrics-trigger').first().click();
        await this.page.locator('#citarapida-content').click()
        await this.page.locator('#citarapida-content').getByRole('combobox').click();
        await this.page.locator('#citarapida-content').getByRole('combobox').first();
        //selectOption(selHorario);
        await this.page.getByRole('button', {name: 'Seleccionar'}).click();

    }

    async selectPaciente(nombrePaciente:string){
        await this.page.getByPlaceholder('Nombre, apellidos, y/o rut...').click();
        await this.page.getByPlaceholder('Nombre, apellidos, y/o rut...').type(nombrePaciente);
        await this.page.getByRole('link', {name: nombrePaciente}).click();
        await this.page.locator('#checkbox-correo-notificacion').uncheck();
        await this.page.getByRole('listitem').filter({ hasText: 'Plan de Tratamiento #1453 Dr(a). José Pablo León VelascoNuevo plan de tratamient' }).getByRole('radio').check();        
        await this.page.getByRole('button', {name: 'Continuar'}).click();
    }

    async confirmacionCita(){
        await this.page.locator('#descargar-comprobante-cita').click();
        await this.page.getByRole('button', {name: 'Cerrar'}).click();

    }
};
//   await page.getByPlaceholder('Nombre, apellidos, y/o rut...').click();
//   await page.getByPlaceholder('Nombre, apellidos, y/o rut...').fill('alvaro');
//   await page.getByRole('link', { name: '37160381 Alvaro Arana' }).click();
//   await page.locator('#checkbox-correo-notificacion').uncheck();
//   await page.getByRole('listitem').filter({ hasText: 'Plan de Tratamiento #1452 Dr(a). Test AppNuevo plan de tratamientoSucursal 1Most' }).getByRole('radio').check();
//   await page.getByRole('button', { name: 'Continuar' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Si el paciente necesita un comprobante de cita, puede obtenerlo acá.' }).click();
//   const page1 = await page1Promise;
//   await page.getByRole('button', { name: 'Cerrar' }).click();
// });