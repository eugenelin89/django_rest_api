# Generated by Django 3.2.5 on 2023-01-26 21:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mybusiness', '0016_auto_20230126_2125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientaddress',
            name='address',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='mybusiness.address'),
        ),
        migrations.AlterField(
            model_name='clientaddress',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='client_addresses', to='mybusiness.client'),
        ),
    ]
