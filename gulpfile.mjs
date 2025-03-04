import gulp from 'gulp';
import { deleteAsync } from 'del';
import deleteEmpty from "delete-empty";
export const clean = async () => {
    await deleteAsync('src/**/*.{d.ts,js}');

};


gulp.task('clean', clean);

