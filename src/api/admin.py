  
import os
from flask_admin import Admin
from .models import db, User, Bike, Photo, Links
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    class MyLinkModel(ModelView):
        form_columns = ('id', 'fecha', 'citas', 'telefono', 'direccion', 'user_id')
    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Bike, db.session))
    admin.add_view(ModelView(Photo, db.session))
    admin.add_view(MyLinkModel(Links, db.session))
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))