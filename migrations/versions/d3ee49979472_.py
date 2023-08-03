"""empty message

Revision ID: d3ee49979472
Revises: 039a504850b1
Create Date: 2023-08-03 10:30:22.874115

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd3ee49979472'
down_revision = '039a504850b1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('links',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('fecha', sa.String(length=250), nullable=False),
    sa.Column('citas', sa.String(length=250), nullable=False),
    sa.Column('telefono', sa.String(length=250), nullable=False),
    sa.Column('direccion', sa.String(length=250), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('links')
    # ### end Alembic commands ###
