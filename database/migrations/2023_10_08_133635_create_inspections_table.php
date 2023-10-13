<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inspections', function (Blueprint $table) {
            $table->id();
            $table->text('protocol_number');
            $table->foreignId('lift_id');
//            $table->integer('lift_id');

            $table->enum('inspection_type', [
                'Pirmreizējā', 'Kārtējā', 'Ārpuskārtas', 'Atkārtotā'
            ])->nullable();
            $table->enum('inspection_next_type', [
                'Pirmreizējā', 'Kārtējā', 'Ārpuskārtas', 'Atkārtotā'
            ])->nullable();
            $table->text('expert')->nullable();

            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
            $table->date('date_next')->nullable();
            $table->date('date_next_normal')->nullable();

            $table->text('label');
            $table->text('bir_number');
            $table->text('inspection_result')->nullable();

            $table->text('participant_1')->nullable();
            $table->text('participant_2')->nullable();


            $table->text('non_compliances_0')->nullable();
            $table->text('non_compliances_1')->nullable();
            $table->text('non_compliances_2')->nullable();
            $table->text('non_compliances_3')->nullable();


            $table->text('notes')->nullable();
            $table->text('notes_for_protokol')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspections');
    }
};
